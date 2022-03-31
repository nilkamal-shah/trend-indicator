import { fetchTrendData } from "../services/TransactionService";
import { renderTrendData } from "../utils/";
import { useState, useEffect } from 'react';

function TransactionSummary() {

    const [trendData, setTrendData] = useState<any>({trendAmount:0, totalAmount:0});
    useEffect(() => {
        async function getData() {
            const urlParams = new URLSearchParams(window.location.search);
            const accountId = urlParams.get('accountId');
            const data = await fetchTrendData(accountId);
            setTrendData(data.data[0]);
        }

        getData();

    }, []);
    
    const {trendAmount, totalAmount} = trendData;

    return (
        <div className='transaction-summary'>
            <div className='total-amount'>
                £{totalAmount} spent so far
            </div>

            {renderTrendData(trendAmount)}
        </div>
    )
};

export default TransactionSummary;
