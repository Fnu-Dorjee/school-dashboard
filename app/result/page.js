

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const student = {
  name: "Fnu Dorjee",
  class: "Class 10",
  roll: "23",
  academicYear: "2025–2026",
}

const results = [
  { subject: "Mathematics", marks: 92, grade: "A+", status: "Pass" },
  { subject: "Science", marks: 88, grade: "A", status: "Pass" },
  { subject: "English", marks: 70, grade: "B", status: "Pass" },
  { subject: "Tibetan", marks: 80, grade: "B+", status: "Pass" },
  { subject: "Computer", marks: 95, grade: "A+", status: "Pass" },
]

const ResultPage =()=> {
  const total = results.reduce((sum, r) => sum + r.marks, 0)
  const percentage = (total / (results.length * 100)) * 100

  return (
    <div className="min-h-screen bg-muted p-6 flex justify-center">
      <Card className="w-full max-w-4xl rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Student Result Report
          </CardTitle>
          <p className="text-center text-sm text-muted-foreground">
            Academic Year {student.academicYear}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Student Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><span className="font-medium">Name:</span> {student.name}</p>
            <p><span className="font-medium">Roll No:</span> {student.roll}</p>
            <p><span className="font-medium">Class:</span> {student.class}</p>
            <p><span className="font-medium">Result:</span> Overall Pass</p>
          </div>

          {/* Result Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Marks</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((r) => (
                <TableRow key={r.subject}>
                  <TableCell>{r.subject}</TableCell>
                  <TableCell>{r.marks}</TableCell>
                  <TableCell>{r.grade}</TableCell>
                  <TableCell>
                    <Badge variant={r.status === "Pass" ? "default" : "destructive"}>
                      {r.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Summary */}
          <div className="flex justify-between items-center border-t pt-4">
            <p className="font-medium">Total Marks: {total}</p>
            <p className="font-medium">Percentage: {percentage.toFixed(2)}%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ResultPage;