export default (imgSrc:string , size = 256) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imgSrc;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(img, 0, 0, size, size);

            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                } else {
                    reject();
                }
            }, "image/png");
        };

        img.onerror = reject;
    });
}
