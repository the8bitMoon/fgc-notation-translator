export default function splitText(text, pattern) {
  return text.split(pattern).map(element => element.trim());
}
