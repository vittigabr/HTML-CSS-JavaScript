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

const { getCollection } = require('./_lib/mongo');
const { validateProduct } = require('./_lib/validators/media');

module.exports = async (req, res) => {
  const collection = await getCollection();

  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;

    const validation = validateProduct(body);
    if (!validation.ok) {
      return res.status(400).json({ error: validation.error });
    }

    await collection.insertOne(validation.value);
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const products = await collection.find({}).toArray();
  return res.status(200).json(products);
};