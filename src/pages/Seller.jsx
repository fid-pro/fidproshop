import SellerCard from "../components/SellerCard"

function Seller() {
    const sellers = [
        {
            name: 'Fidpro',
            subname: 'Nfs'
        },
        {
            name: 'djakam',
            subname: 'yankam'
        },
        {
            name: 'Fidpro',
            subname: 'Nfs'
        },
        {
            name: 'djakam',
            subname: 'yankam'
        },
    ]
    return (
        <div className="flex flex-wrap">
            {sellers.map((seller) => {
                return <SellerCard key={seller.name} seller={seller} />
            })}
        </div>
    )
}

export default Seller