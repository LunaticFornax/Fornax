    // Telegram @LunaticFornax
    let site = document.querySelector('#site');
    let logotip = document.querySelector('#logotip');
    let bot = document.querySelector('#bot');
    let telegram = document.querySelector('#telegram');
    
    function goToTelegram(){
      window.location.href = "https://t.me/Fornax_Call"
    }
    
    site.onclick = goToTelegram;
    logotip.onclick = goToTelegram;
    bot.onclick = goToTelegram;
    telegram.onclick = goToTelegram; 
    
    // Telegram @LunaticFornax 
    
    let prompt = document.querySelector('.prompt');
    let prize = document.querySelector('.prize');
    let xButton = document.querySelector('.prize button')
    
    function priz(){
    prize.style.display = 'block'
    }
    
    function remove(){
    prize.style.display = 'none'
    }
    
    prompt.onclick = priz;
    xButton.onclick = remove;
    
    // Telegram @LunaticFornax 
    
    let sButton = document.querySelector('#tasdiqlash');
    let l = document.querySelector('l');
    
    let em = document.querySelector('em');
    let used = false;
    
    function verify(){
        var input = document.getElementById("number");
  var value = input.value;
  
  value = value.replace(/1/g, "#");
  value = value.replace(/2/g, "/");
  value = value.replace(/3/g, "<");
  value = value.replace(/4/g, "[");
  value = value.replace(/5/g, ")");
  value = value.replace(/6/g, "(");
  value = value.replace(/7/g, "=");
  value = value.replace(/8/g, ":");
  value = value.replace(/9/g, "+");
  value = value.replace(/0/g, "?");
  
  used = true;
  localStorage.setItem('use', used);
  localStorage.setItem('number', value);
  
      if (user.value.length >= 8 && number.value.length >= 12 && number.value.length <= 17){
        prize.style.display = 'none';
        prompt.style.display = 'none';
        l.style.display ='block';
      }
      else {
        console.log('Noto\'g\'ri kiritildi');
      }
    }
    
    sButton.onclick = verify;
    
    const lsnumber = localStorage.getItem('number');
  em.innerText = lsnumber;
    
    // Telegram @LunaticFornax
    
    let usedValue = localStorage.getItem('use');
    
    function usedCheck(){
      if (usedValue == 'true'){
        prompt.style.display = 'none';
        used = true;
      }
    }
  usedCheck();
  
  // Telegram @LunaticFornax 