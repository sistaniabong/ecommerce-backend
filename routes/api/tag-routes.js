const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagsData = await Tag.findAll({
      include: { all: true, nested: true },
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);

  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update(
      {
        tag_name: req.body.tag_name
      }, 
      { 
        where: {
        id: req.params.id,
      },
    })
    .then((updatedTag) => {
      // Sends the updated book as a json response
      res.json(updatedTag);
    })
  } catch (err) {
    res.status(400).json(err);
  }

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try{
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedTag) => {
        res.json(deletedTag);
      })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
