const username=localStorage.getItem('usern')
head1.innerHTML=`WELCOME ${username}`

function addEmp(){
    employee={
        id:empid.value,//employee id is unique
        name:empnam.value,
        addr:empaddre.value,
        desi:empdesi.value,
        exp:empexp.value,
        sal:empsal.value
    }
    if(employee.id in localStorage){
        alert("employee already exists")
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Emplyee details Added")
        empid.value=""
        empnam.value=""
        empaddre.value=""
        empdesi.value=""
        empexp.value=""
        empsal.value=""
    }

}

function searchClick(){
    let key=searchId.value
    let employee=JSON.parse(localStorage.getItem(key))

    result.innerHTML=`
    
<div class="w-screen bg-white max-w-sm p-4 sm:p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <h5 class="mb-2 text-base md:text-xl font-semibold text-heading">Employee</h5>
    <ul class="my-6 space-y-3">
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.id}</span>
        
                </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.name}</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.addr}</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.desi}</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.exp}</span>
            </a>
        </li>
         <li>
            <a href="#" class="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                <span class="flex-1 ms-3 whitespace-nowrap">${employee.sal}</span>
            </a>
        </li>
    </ul>
</div>
`
}


function logOut(){
    localStorage.clear()
    window.location='./login.html'
}