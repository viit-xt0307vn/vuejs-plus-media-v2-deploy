import axios from "axios";

export default async function (req, res, next) {
    const params = {
        api_key: '0906429283',
        website_id: 40,
        limit: 1,
    }
    await axios
        .get("https://genplusmedia.online/manager/posts/json/1.json", { params })
        .then((response) => {
            const data = response.data;
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify(data));
        })
        .catch((error) => {
            console.error("API Error:", error);
            next(error);
        });
}
