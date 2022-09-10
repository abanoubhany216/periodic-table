let search = document.getElementById("search");let search_by = document.getElementById("search-by");let sub = document.getElementById("sub");let result = document.getElementById("result");let name = document.getElementById("element-name");let symbol = document.getElementById("element-symbol");let standard_state = document.getElementById("element-standard-state");let group_block = document.getElementById("element-group-block");let atomic_mass = document.getElementById("element-atomic-mass");let atomic_number = document.getElementById("element-atomic-number");let atomic_radius = document.getElementById("element-atomic-radius");let boiling_point = document.getElementById("element-boiling-point");let bonding_type = document.getElementById("element-bonding-type");let color = document.getElementById("element-color");let density = document.getElementById("element-density");let melting_point = document.getElementById("element-melting-point"); let msg = document.getElementById("msg");result.style.display = "none";async function find(){    if(search_by.value == "Name"){    const res = await fetch(`https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${search.value.trim()}`);        const data = await res.json();    if(data.name != null ){   name.innerHTML = data.name;   symbol.innerHTML = data.symbol;   standard_state.innerHTML = data.standardState;   group_block.innerHTML = data.groupBlock;   atomic_mass.innerHTML = data.atomicMass;   atomic_number.innerHTML = data.atomicNumber;   atomic_radius.innerHTML = data.atomicRadius;   boiling_point.innerHTML = data.boilingPoint;   bonding_type.innerHTML = data.bondingType;   color.value = "#" + data.cpkHexColor;   density.innerHTML = data.density;   melting_point.innerHTML = data.meltingPoint;        msg.innerHTML = '';        result.style.display = "block";    }else{        msg.innerHTML = "Not found check that you write in English or you write an exist element";        result.style.display = "none";    }}if(search_by.value == "Symbol"){    const res = await fetch(`https://neelpatel05.pythonanywhere.com/element/symbol?symbol=${search.value.trim()}`);    const data = await res.json();    if(data.name != null){        name.innerHTML = data.name;        symbol.innerHTML = data.symbol;        standard_state.innerHTML = data.standardState;        group_block.innerHTML = data.groupBlock;        atomic_mass.innerHTML = data.atomicMass;        atomic_number.innerHTML = data.atomicNumber;        atomic_radius.innerHTML = data.atomicRadius;        boiling_point.innerHTML = data.boilingPoint;        bonding_type.innerHTML = data.bondingType;        color.value = "#" + data.cpkHexColor;        density.innerHTML = data.density;        melting_point.innerHTML = data.meltingPoint;        msg.innerHTML = '';        result.style.display = "block";    }else{         msg.innerHTML = "Not found check that you write in English or you write an exist element";         result.style.display = "none";      }}}sub.onclick = () => {  find()}