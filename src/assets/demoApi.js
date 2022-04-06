const shortId = require('shortid')
const { faker } = require('@faker-js/faker')

module.exports = () => {
  const data = {
    auth: {
      code: 0,
      msg: 'OK',
      result: {
        userId: 'test',
        name: '관리자',
        lv: 1,
        token: '369369369veryveryhardkey3696369veryveryhardkey36369369369veryveryhardkey369'
      }
    },
    posts: {
      code: 0,
      msg: 'OK',
      result: {
        items: []
      }
    },
    postInfo: {
      code: 0,
      msg: 'OK',
      result: {
        item: {
          id: shortId.generate(),
          title: 'posts_' + faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          image: faker.image.image(),
          animals: faker.image.animals(),
          author: faker.name.findName(),
          createAt: faker.date.recent()
        }
      }
    }
  }
  // Create 10 items
  for (let i = 0; i < 10; i++) {
    data.posts.result.items.push(
      {
        id: shortId.generate(),
        title: 'posts_' + faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        image: faker.image.image(),
        animals: faker.image.animals(),
        author: faker.name.findName(),
        createAt: faker.date.recent()
      }
    )
  }
  return data
}
