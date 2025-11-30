export default function dateTimeConverter(data){
    if (!data.date || !data.time) return ["", ""]

    const d = data.date
    const day = String(d.day).padStart(2, "0")
    const month = String(d.month).padStart(2, "0")
    const time = data.time.toString().slice(0, 5)

    return [
        `${day}.${month}`,
        time
    ]
}