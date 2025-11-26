import QRCodeStyling from "qr-code-styling";

export default (options = {}) => {
    return new Promise(async (resolve, reject) => {
        const qrCode = new QRCodeStyling({
            data: options.link,
            width: options.size || 256,
            height: options.size || 256,
            dotsOptions: {
                color: options.colorDark || "#000000",
                type: options.dotStyle || "square",
            },
            cornersSquareOptions: {
                color: options.colorDark || "#000000",
                type: options.cornerSquareStyle || 'square',
            },
            cornersDotOptions: {
                color: options.colorDark || "#000000",
                type: options.cornerDotStyle || 'square',
            },
            image: options.image || "",
            imageOptions: {
                hideBackgroundDots: true,
                imageSize: 0.4,
                margin: 6,
            },
            backgroundOptions: {
                color: "transparent"
            },
        });

        try {
            const blob = await qrCode.getRawData("png");
            const url = URL.createObjectURL(blob);
            resolve(url);
        } catch (err) {
            reject(err);
        }
    });
};
