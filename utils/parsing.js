const _ = require('lodash')
const XLSX = require('xlsx')

const getSheet = ({Sheets}) => {
  const result = []
  _.forIn(Sheets, sheet => {
    const sheetTransform = []
    _.forIn(sheet,
      (value, key) => {
        if (key.indexOf('!') === -1) {
          let keyCol = key.match(/[A-Z]+/g)
          let keyRow = key.match(/[0-9]+/g)

          if (sheetTransform[keyRow] === undefined) 
            sheetTransform[keyRow] = { id: _.uniqueId() }
          
          sheetTransform[keyRow][keyCol] = value['v']
        }
      },
    [])

    result.push(sheetTransform)
  })

  return result
}


const parsingSheet = async (req, res) => {
  var sheet
  
  try {
    req.pipe(req.busboy)
    req.busboy.on('file', function(fieldname, file, filename) {
      var buffers = [];

      file.on('data', function(data) { buffers.push(data) });
      file.on('end', function() {
        var buffer = Buffer.concat(buffers)
        var workbook = XLSX.read(buffer, {type:"buffer"})
        var sheet = getSheet(workbook)
        var compare = _.flattenDeep(sheet)
        var result = _.remove(compare, n => n !== undefined)
        var columns = _.keys(result[1])

        res.status(200).send({
          columns: columns,
          sheets: result
        })
      });
    })
  } catch (error) {
    res.status(400).send(error)
  }
}


module.exports = {
  parsingSheet
}