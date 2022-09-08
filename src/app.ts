import express from 'express'

export const app = express()

app.use(express.json())

interface IEmployees {
    age: number,
    name: string,
    role: string
}

const employees: IEmployees[] = []

app.get('/employees', (request, response) => {
    return response.json(employees)
})

app.post('/employees', (request, response) => {
    const {age, name, role} = request.body
    
    const employee = { age, name, role}

    employees.push(employee)

    return response.json(employee)
})

