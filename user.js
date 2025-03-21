const BASE_URL = 'http://localhost:8000';

window.onload = async () => {
   await loadData()
}

const loadData = async () => {
   console.log('user page load')

   // 1. load user ทั้งหมดจาก api ที่เตรียมไว้
   const response = await axios.get(`${BASE_URL}/users`);
   
   console.log(response.data);

   const userDOM = document.getElementById('user');

   // 2.นำ user ทั้งหมด โหลดกลับเข้าไปใน HTML(แสดงผล)
   
   let htmlData = '<div>'
       htmlData +=`<table>
         
            <tr>
               <th class='balance'>ID</th>
               <th class='balance'>Name</th>
               <th class='balance'>Age</th>
               <th class='balance'>gender</th>
               <th class='balance'>Interest</th>
               <th class='balance'>description</th>
               <th class='balance'>Action</th>
            </tr>
         `

   for(let i=0; i< response.data.length; i++){
      let user = response.data[i];

      htmlData += `<div>

         
         
            <tr>
 
               <td class='balance'>${user.id}</td> 
               <td > 
                  ${user.firstname} 
                  ${user.lastname} 
               </td>
               <td > 
                  ${user.age}
               </td>
               <td > 
                  ${user.gender}
               </td>
               <td > 
                  ${user.interests}
               </td>
               <td > 
                  ${user.description}
               </td>

               <td class='balance '>
                  <a href = 'index2.html?id=${user.id}' ><button class='button button2'>Edit</button></a>
                  <button class = 'button button2  delete' data-id= '${user.id}'>Delete</button>
               </td>
            </tr>
         
         

      </div>`
   }
   htmlData += '</table>'
   htmlData += '</div>'
   userDOM.innerHTML = htmlData;

   // 3. ลบ user
   const deleteDOMs = document.getElementsByClassName('delete');
   for(let i=0; i<deleteDOMs.length; i++){
      deleteDOMs[i].addEventListener('click', async (e) => {
         //ดึง id ของ user ที่ต้องการลบ
         const id = e.target.dataset.id
         try{
            await axios.delete(`${BASE_URL}/users/${id}`);
            loadData() // recursive function = เรียกใช้ฟังก์ชันตัวเอง   
         }catch(error){
            console.log('error', error);
         }
      });
   }
}