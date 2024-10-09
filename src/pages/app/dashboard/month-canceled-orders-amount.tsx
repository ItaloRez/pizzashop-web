import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export interface MonthCanceledOrdersAmountProps {}

export function MonthCanceledOrdersAmount() {
  const { data: montCanceledhOrdersAmout } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {montCanceledhOrdersAmout ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {montCanceledhOrdersAmout.amount.toLocaleString('pt-BR')}
            </span>

            {montCanceledhOrdersAmout.diffFromLastMonth <= 0 ? (
              <>
                <p className="text-sm text-muted-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {montCanceledhOrdersAmout.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">
                    + {montCanceledhOrdersAmout.diffFromLastMonth}%
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
