import { PrismaClient } from '@prisma/client'
import user from './data/user.json'
import categories from './data/categories.json'
import products from './data/products.json'
import sliders from './data/sliders.json'

const prisma = new PrismaClient()
const adminEmail: string = 'admin@rehan.id'

const seedUser = async () => {
  console.log('--- Start seeding user data ---')

  await prisma.user.deleteMany()
  await prisma.user.create({
    data: user
  })

  console.log('Created user', user.email)
  console.log('Seeding user data finished')
}

const seedCategories = async () => {
  console.log('--- Start seeding categories data ---')

  await prisma.category.deleteMany()
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
        createdByUser: {
          connect: {
            email: adminEmail
          }
        }
      }
    })

    console.log('Created category', category.name)
  }
  
  console.log('Seeding categories data finished')
}

const seedProducts = async () => {
  console.log('--- Start seeding products data ---')

  await prisma.product.deleteMany()
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        image: product.image,
        description: product.description,
        price: product.price,
        isUseStock: product.isUseStock,
        baseStock: product.baseStock,
        remainStock: product.baseStock,
        createdByUser: {
          connect: {
            email: adminEmail
          }
        },
        categories: {
          connect: {
            slug: product.categorySlug
          }
        }
      }
    })

    console.log('Created product', product.name)
  }
  
  console.log('Seeding products data finished')
}

const seedSliders = async () => {
  console.log('--- Start seeding sliders data ---')

  await prisma.slider.deleteMany()
  for (const slider of sliders) {
    await prisma.slider.create({
      data: slider
    })

    console.log('Created slider', slider.name)
  }
  
  console.log('Seeding sliders data finished')
}

const main = async () => {
  await seedUser()
  await seedCategories()
  await seedProducts()
  await seedSliders()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
