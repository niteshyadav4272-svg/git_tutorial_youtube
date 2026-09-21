import path from "path"

export const downloadFile = (req, res) => {
    try {
        const { id } = req.params

        const filePath = path.join(process.cwd(), "uploads", id)

        res.download(filePath, id)

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export default downloadFile