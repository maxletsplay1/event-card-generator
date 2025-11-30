import html2canvas from "html2canvas-pro";

export default async function (el, name:string, time:string) {
    if (!el) {
        console.warn('Элемент не найден')
        return
    }

    const canvas = await html2canvas(el, {
        scale: 3,
        useCORS: true
    })

    const link = document.createElement('a')
    link.download = `${name}(${time}).png`
    link.href = canvas.toDataURL('image/png')
    link.click()
}