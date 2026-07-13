const dataStaff = [
                    {"name" : "Jason","sale" : 10},
                    {"name" : "Jack","sale": 32},
                    {"name" : "Slam","sale" :14},
                    {"name" : "Lina","sale" : 6},
                    {"name" : "Lina","sale" : 66},
                    {"name" : "Dany","sale" :43},
                    {"name" : "Dany","sale" : 31}
                ]

const dataStaffService = () => {
                    
                    const topTwo = dataStaff.filter(d => d.sale)
                                    .sort((a,b) => b.sale - a.sale)
                                    .slice(0,2)

                    const lowest = dataStaff.filter(d => d.sale)
                                    .sort((a,b) => a.sale - b.sale)
                                    .slice(0,1)

        return {topTwo,lowest}
}

export default dataStaffService