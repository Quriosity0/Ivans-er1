const phone = {
    denis: 22222,
    oleg: 33333,
    katya: 11111,
    ira: 12345
}

const select = document.createElement('select');

for (let name in phone){
    const option = document.createElement('option');
    option.value = phone[name];
    option.text = name;
    select.append(option);
};

document.body.append(select);