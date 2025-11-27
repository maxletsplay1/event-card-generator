export default function convertUTF8StringTo8bitArray (text: string) {
    const encoder = new TextEncoder();
    const utf8Bytes = encoder.encode(text);
    let dataString = '';
    for (let i = 0; i < utf8Bytes.length; i++) {
        dataString += String.fromCharCode(utf8Bytes[i]);
    }
    return dataString;
}