import {
  Row,
  Descriptions,
  Typography,
  Table,
  Tag,
  Dropdown,
  Menu,
  Button,
  Icon,
  Badge,
  Card,
  Input,
  Modal,
  message
} from "antd";
import axios from "axios";
import Head from "next/head";
import moment from "moment";
import { withAuthSync } from "../utils/auth";
import React, { useRef, useState } from "react";
import _ from "lodash";
import Highlighter from "react-highlight-words";
import AdminLayout from "../components/AdminLayout";
import sort from "js-flock/sort";

function AdminModel(props) {
  const searchInput = useRef(null);
  const [model, setModel] = useState(props.model);
  const [selected, setSelected] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState(null);

  const handleDeleteSoft = async (ids, isDeleted) => {
    const response = await axios({
      method: "PATCH",
      url: `${props.apiModel}`,
      data: { ids, isDeleted },
      headers: { authorization: props.token }
    });

    if (response.status === 200) {
      message.success("Model updated successfully.");
      setModel(response.data);
    }
  };

  const handleDestroy = ids => {
    const handleOk = async () => {
      const response = await axios({
        method: "DELETE",
        url: `${props.apiModel}`,
        headers: { authorization: props.token },
        data: { ids }
      });

      if (response.status === 200) {
        message.success("Model deleted successfully.");
        setModel(response.data);
      }
    };

    Modal.confirm({
      title: "Are you sure?",
      content: "You will not be able to recover this model.",
      okText: "Yes",
      onOk: handleOk,
      cancelText: "Cancel"
    });
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select());
      }
    },
    render: text => (
      <Highlighter
        className="table-text"
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  });

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const handleTable = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const handleRemoves = () => {
    if (selected.length === 0) {
      message.warning("Nothing was selected.");
      return;
    }

    handleDestroy(selected);
  };

  const handleMenuClick = (e, id) => {
    switch (e.key) {
      case "undelete_soft":
        handleDeleteSoft(id, false);
        break;
      case "delete_soft":
        handleDeleteSoft(id, true);
        break;
      case "destroy":
        handleDestroy(id);
        break;
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name")
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      width: 200
    },
    {
      title: "Type",
      dataIndex: "isPrivate",
      width: 110,
      align: "center",
      render: text => (
        <Badge
          status={!text ? "green" : "blue"}
          text={text ? "Private" : "Public"}
        />
      )
    },
    {
      title: "Status",
      dataIndex: "isDeleted",
      width: 110,
      align: "center",
      render: text => (
        <Badge
          status={text ? "error" : "success"}
          text={text ? "Disabled" : "Active"}
        />
      )
    },
    {
      title: "Last Modified",
      dataIndex: "updatedAt",
      width: 200,
      align: "center",
      render: text => (
        <Typography.Text>{moment(text).fromNow()}</Typography.Text>
      )
    },
    {
      key: "operation",
      width: 200,
      align: "right",
      render: (text, record) => (
        <Dropdown
          overlay={
            <Menu onClick={key => handleMenuClick(key, record.id)}>
              {record.isDeleted && (
                <Menu.Item key="undelete_soft">Recovery</Menu.Item>
              )}
              {!record.isDeleted && (
                <Menu.Item key="delete_soft">Disable</Menu.Item>
              )}
              <Menu.Item key="destroy">Delete</Menu.Item>
            </Menu>
          }
        >
          <Button>
            Actions <Icon type="down" />
          </Button>
        </Dropdown>
      )
    }
  ];

  const ExpandedComponent = record => {
    const config = record.config;
    const user = record.user;

    const getAnnotator = () => {
      return record.annotator === "classifier"
        ? "Classifier"
        : record.annotator === "extractor"
        ? "Extractor"
        : "Pattern Extractor";
    };

    return (
      <Descriptions title="Model Information" bordered>
        <Descriptions.Item
          span={3}
          label="Author"
        >{`${user.firstname} ${user.lastname}`}</Descriptions.Item>
        <Descriptions.Item span={3} label="Name">
          {record.name}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Description">
          <Typography.Paragraph>{record.desc}</Typography.Paragraph>
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Labels">
          {record.label &&
            record.label.map((item, key) => (
              <Tag key={key} className="ant-custom" color={item.color}>
                {item.name}
              </Tag>
            ))}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Annotator">
          {getAnnotator()}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Type">
          {record.isPrivate ? "Private" : "Public"}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Status">
          <Badge
            status={record.isDeleted ? "error" : "success"}
            text={record.isDeleted ? "Not Active" : "Active"}
          />
        </Descriptions.Item>
        <Descriptions.Item span={3} label="UI Stats">
          <Badge
            status={config.UIStats ? "success" : "error"}
            text={config.UIStats ? "Active" : "Not Active"}
          />
        </Descriptions.Item>
        <Descriptions.Item span={3} label="UI Annotation">
          <Badge
            status={config.UIAnnotation ? "success" : "error"}
            text={config.UIAnnotation ? "Active" : "Not Active"}
          />
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Created Date">
          {moment(record.createdAt).fromNow()}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Updated Date">
          {moment(record.updatedAt).fromNow()}
        </Descriptions.Item>
      </Descriptions>
    );
  };

  const CardExtra = [
    <Button key="0" type="danger" onClick={handleRemoves}>
      Delete Selected
    </Button>
  ];

  return (
    <AdminLayout {...props}>
      <Row>
        <Head>
          <title>Admin Model - Sistem Anotasi Named Entity</title>
        </Head>
        <Card bordered={false} title="Model Data" extra={CardExtra}>
          <Table
            rowKey="id"
            scroll={{ x: 1100 }}
            columns={columns}
            dataSource={model}
            onChange={handleTable}
            rowSelection={{
              selectedRowKeys: selected,
              onChange: selectedRowKeys => {
                setSelected(selectedRowKeys);
              }
            }}
            expandedRowRender={ExpandedComponent}
          />
        </Card>
      </Row>
    </AdminLayout>
  );
}

AdminModel.getInitialProps = async ({ apiUrl, token }) => {
  const apiModel = `${apiUrl}/admin/model`;

  const fetchModel = () => {
    return axios({
      method: "GET",
      url: `${apiUrl}/admin/model`,
      headers: { authorization: token }
    });
  };

  const [model] = await axios.all([fetchModel()]);

  return {
    apiModel,
    model: model.data
  };
};

export default withAuthSync(AdminModel, 1);
