import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '13221312123',
    },
    status: 'processing',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'item-1',
        product: {
          name: 'Pizza',
        },
        priceInCents: 12000,
        quantity: 2,
      },
      {
        id: 'item-2',
        product: {
          name: 'Coke',
        },
        priceInCents: 3000,
        quantity: 2,
      },
    ],
    totalInCents: 30000,
  })
})
