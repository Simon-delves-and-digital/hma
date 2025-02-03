import { test, expect, vi } from 'vitest'
import { getProducts } from './api'


const mockData = {
  products: [
    { id: 1, title: "t1", price: '1', thumbnail: 'test thumb 1', description: 'test desc 1' },
    { id: 2, title: "t2", price: '2', thumbnail: 'test thumb 2', description: 'test desc 2' }
  ]
}

global.fetch = vi.fn()


const createFetchMock = (sucessful = true) => {
  return async () => {
    return sucessful ?
      Promise.resolve({
        json: () => Promise.resolve(mockData)
      })
      :
      Promise.resolve({
        json: () => Promise.resolve(new Error('Async error'))
      })

  }
}

test('get product data', async () => {
  fetch.mockImplementation(createFetchMock(true))

  const resp = await getProducts()

  expect(resp).toEqual(mockData.products)
})

test('get product data returns null on unsucessful call', async () => {
  fetch.mockRejectedValue(new Error('Async error'))

  let result = await getProducts()

  expect(result).toEqual(null)

});