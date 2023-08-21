import { PrismaClient } from '@prisma/client'
import user from './data/user.json'
import categories from './data/categories.json'
import products from './data/products.json'

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
  categories.map(category => {
    prisma.category.create({
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
  })
  
  console.log('Seeding categories data finished')
}

const seedProducts = async () => {
  console.log('--- Start seeding products data ---')

  await prisma.product.deleteMany()
  products.map(product => {
    prisma.product.create({
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
  })
  
  console.log('Seeding products data finished')
}

const main = async () => {
  await seedUser()
  await seedCategories()
  await seedProducts()
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
