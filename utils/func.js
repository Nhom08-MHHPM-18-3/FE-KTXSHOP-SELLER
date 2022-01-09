import moment from "moment";

export function formatNumber(num) {
  return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function formatEllipsisText(text, len = 100) {
  if (text) {
    if (text.length > 50) {
      return text.substring(0, len) + "..."
    }
    return text
  }
  return '-'
}

export function formatMessageError(code) {
  return `${ErrorCode[code]}`
}

export const fnValidateTextDefault = (txt) => {
  let str = txt?.toString().trim()
  if (str.length < 6 || str.length > 250) {
    return "Vui lòng không nhập dư khoảng trắng"
  }
  return null
}

export const fnReplaceMultipleSpaceToSingleSpace = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      k, typeof v == 'string' ? v?.toString().trim().replace(/\s+/g, ' ') : v
    ])
  )
}


export function formatTime(timeFormat, utcOffset = '+0700', type = "DD-MM-YYYY HH:mm:ss") {
  return moment(timeFormat).utcOffset(utcOffset).format(type)
}

export function trimSpace(str) {
  return str.trim().replace(/\s+/g, ' ')
}

export const LevelRegios = [{
  label: 'Trung ương',
  value: 'Trung ương'
}]

export function formatUrlSearch(str) {
  return str.trim().replace(/\s+/g, ' ')
    .replace(/[&]/, '%26')
    .replace(/[+]/, '%2B')
    .replace(/[#]/, '%23');
}
