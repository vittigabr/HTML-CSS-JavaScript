const medias = [
    {
        id: 1,
        type: "movie",
        tittle: "Gigantes de Aço"
    },
    {
        id: 2,
        type: "serie",
        tittle: "MaxSteel"
    },
    {
        id: 3,
        type: "tv",
        tittle: "Ben 10"
    }
];

module.exports = (req, res) => {
    if (req.method === "GET"){
        return res.status(200).json({medias});
    }
    else if(req.method === "POST"){
        const newMedia = req.body;
        return res.status(201).json([...medias, newMedia])
    }
}