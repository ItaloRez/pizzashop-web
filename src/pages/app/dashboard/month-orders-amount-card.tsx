import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export interface MonthOrdersAmountCardProps {}

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmout } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmout ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmout.amount.toLocaleString('pt-BR')}
            </span>

            {monthOrdersAmout.diffFromLastMonth >= 0 ? (
              <>
                <p className="text-sm text-muted-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">
                    + {monthOrdersAmout.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrdersAmout.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </p>
              </>
            )}
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
