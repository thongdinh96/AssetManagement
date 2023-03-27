namespace API.Entities
{
    public class Crypto
    {
        public int Id { get; set; }

        public string CoinName { get; set; }
        
        public decimal Amount { get; set; }
        
        public decimal BuyPrice { get; set; }

        public DateTime BuyDate { get; set; }

        public decimal SellPrice { get; set; }

        public DateTime SellDate { get; set; }
    }
}
