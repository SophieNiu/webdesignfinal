SELECT region,country,(round(sum(suicides_no)*100000.00/sum(population),2)) as suicidal_rate, gdp_per_capita
FROM simple_data
GROUP by country

