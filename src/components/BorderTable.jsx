export default function BorderTable(){
return (


<table className="table p-4 bg-white rounded-lg shadow">
    <thead>
        <tr>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                #
            </th>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                First name
            </th>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Last name
            </th>
            <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Username
            </th>
        </tr>
    </thead>
    <tbody>
        <tr className="text-gray-700">
            <td className="border p-4 dark:border-dark-5">
                1
            </td>
            <td className="border p-4 dark:border-dark-5">
                Jean Marc
            </td>
            <td className="border p-4 dark:border-dark-5">
                Louis
            </td>
            <td className="border p-4 dark:border-dark-5">
                Jl987
            </td>
        </tr>
        <tr className="text-gray-700">
            <td className="border p-4 dark:border-dark-5">
                2
            </td>
            <td className="border p-4 dark:border-dark-5">
                Eric
            </td>
            <td className="border p-4 dark:border-dark-5">
                Prouve
            </td>
            <td classNames="border p-4 dark:border-dark-5">
                prouveE
            </td>
        </tr>
        <tr className="text-gray-700">
            <td className="border p-4 dark:border-dark-5">
                3
            </td>
            <td className="border p-4 dark:border-dark-5">
                Julien
            </td>
            <td className="border p-4 dark:border-dark-5">
                Clai
            </td>
            <td className="border p-4 dark:border-dark-5">
                CJUL87
            </td>
        </tr>
        <tr className="text-gray-700">
            <td className="border p-4 dark:border-dark-5">
                4
            </td>
            <td className="border p-4 dark:border-dark-5">
                Igor
            </td>
            <td className="border p-4 dark:border-dark-5">
                Louth
            </td>
            <td className="border p-4 dark:border-dark-5">
                IGL89_9
            </td>
        </tr>
    </tbody>
</table>

)
}