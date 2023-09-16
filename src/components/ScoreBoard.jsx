/* eslint-disable react/prop-types */
import { useEffect, useMemo } from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

export const ScoreBoard = ({ division }) => {
  useEffect(() => {

  }, [])
  const data = useMemo(() => division, [division])

  /** @type import('@tanstack/react-table').columdef<any> */
  const columns = [{
    header: 'Pos',
    accessorKey: 'posicion'
  }, {
    header: 'Equipo',
    accessorKey: 'nombre',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'PT',
    accessorKey: 'puntos',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'PJ',
    accessorKey: 'partidos_jugados',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'PG',
    accessorKey: 'partidos_ganados',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'PE',
    accessorKey: 'partidos_empatados',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'PP',
    accessorKey: 'partidos_perdidos',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'GF',
    accessorKey: 'goles_a_favor',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'GC',
    accessorKey: 'goles_en_contra',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  },
  {
    header: 'Dif',
    accessorKey: 'diferencia_de_goles',
    Cell: flexRender(({ value }) => <strong>{value}</strong>)
  }]

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <>
      <table>
        {table.getHeaderGroups().map(HeaderGroup => (
          <tr key={HeaderGroup.id}>
            {HeaderGroup.headers.map(header => (
              <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
            ))}
          </tr>
        ))}

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </>

  )
}
