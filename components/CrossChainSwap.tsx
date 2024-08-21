import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ArrowRightIcon, RefreshCwIcon } from 'lucide-react'

export default function Component() {
  const [fromAmount, setFromAmount] = useState('1')
  const [toAmount, setToAmount] = useState('10000')
  const [fromCurrency, setFromCurrency] = useState('BTC')
  const [toCurrency, setToCurrency] = useState('BEL')

  // Mocked exchange rate and fee
  const exchangeRate = 10000
  const fee = 0.1 // 0.1%

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    setToAmount((parseFloat(value) * exchangeRate).toString())
  }

  const handleToAmountChange = (value: string) => {
    setToAmount(value)
    setFromAmount((parseFloat(value) / exchangeRate).toString())
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Cross-Chain Swap</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fromAmount">From</Label>
          <div className="flex space-x-2">
            <Input
              id="fromAmount"
              type="number"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
              className="flex-grow"
            />
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">BTC</SelectItem>
                <SelectItem value="BEL">BEL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="icon" onClick={swapCurrencies}>
            <ArrowDownIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="toAmount">To</Label>
          <div className="flex space-x-2">
            <Input
              id="toAmount"
              type="number"
              value={toAmount}
              onChange={(e) => handleToAmountChange(e.target.value)}
              className="flex-grow"
            />
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">BTC</SelectItem>
                <SelectItem value="BEL">BEL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
          <p>Fee: {fee}%</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Swap
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}