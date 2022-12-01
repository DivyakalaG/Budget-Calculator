//1
const balance = document.getElementById("balance");
const credit = document.getElementById("credit");
const debit = document.getElementById("debit");
const text = document.getElementById("text");
const amount = document.getElementById("amount");


let transactions=[];

//check if inputs are null or not

    
function add()
{
 

  if(text.value=='' || amount.value=='')
  {
    alert('Enter the text and amount')
  }
  else{
    const transaction={
      text: text.value,
      amount: amount.value
    }
    
    console.log(transaction, typeof(transaction));
    transactions.push(transaction);
    localStorage.setItem('transactions',JSON.stringify(transactions));
        
    calculate() ;
    
    text.value="";
    amount.value="";

     
  }
}


function calculate()
{
 
  const amounts = transactions.map((transaction) => transaction.amount);
  const income =parseInt(amounts.filter((item) => item > 0).reduce((acc, item) => (acc -= item), 0)*-1);
  const expense =parseInt(amounts.filter((item) => item < 0).reduce((acc, item) => (acc -= item), 0) *-1);
  const total=parseInt(income+expense);

  balance.innerHTML=`&#x20B9 ${total}`;
  credit.innerHTML=`&#x20B9 ${income}`;
  debit.innerHTML=`&#x20B9 ${expense}`;

}

//history

function view()
{

  const transactions = (localStorage.getItem("transactions"));
  result.innerText=(transactions)
}


//reset

function reset()
{
  localStorage.removeItem('transactions');
  text.value='';
  amount.value='';
  result.innerHTML='';
  credit.innerHTML='&#x20B9 0';
  debit.innerHTML='&#x20B9 0';
  balance.innerHTML='&#x20B9 0';
  
}



