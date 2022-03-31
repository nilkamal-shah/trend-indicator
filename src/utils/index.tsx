export function renderTrendData(trendAmount: number) {
    if(trendAmount > 1) {
        return <>
            <p>£{trendAmount} more than the previous month</p>
        </>
    } 
    if(trendAmount < -1) {
        return <p>£{Math.abs(trendAmount)} less than the previous month</p>
    }
    return <p>You've spent same amount as previous month</p>
}