SELECT region, sex,(round(sum(suicides_no)*100000.00/sum(population),2)) as suicidal_rate
FROM simple_data
GROUP by region, sex

