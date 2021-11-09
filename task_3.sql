SELECT  name , SUM(`price` * `amount`) totalPrice, transactionDate 
FROM      USER WHERE name="Ahmad"
GROUP BY  transactionDate;