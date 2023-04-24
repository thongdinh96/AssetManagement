namespace API.DTOs
{
    public class CryptoOrderDto
    {
        public int Id { get; set; }

        public string CoinName { get; set; }

        public decimal BuyAmount { get; set; }

        public decimal BuyPrice { get; set; }

        public decimal BuyTotal { get; set; }

        public DateTime BuyDate { get; set; }

        public decimal SellAmount { get; set; }

        public decimal SellPrice { get; set; }

        public DateTime SellDate { get; set; }
    }
}
