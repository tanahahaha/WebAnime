// const select1 = document.querySelector.bind(document);
// const selectAll = document.querySelectorAll.bind(document);

const cateItems = selectAll('.category__item');
const cateConts = selectAll('.category__cont');

const cateItems2 = selectAll('.category__item2');
const cateConts2 = selectAll('.view__list');
// console.log('hahahh',cateConts2)
// console.log(cateItems)

cateItems.forEach((cateItem , index)=>{
    const cate = cateItems[index];
    const cont = cateConts[index];

    cateItem.onclick = function(){
        select1('.category__item.active--cate').classList.remove('active--cate');
        select1('.category__cont.active--cont').classList.remove('active--cont');
        cate.classList.add('active--cate');
        cont.classList.add('active--cont');
    }
});

cateItems2.forEach((cateItem2 , index)=>{
    const cate2 = cateItems2[index];
    const cont2 = cateConts2[index];

    cateItem2.onclick = function(){
        select1('.category__item2.active--cate').classList.remove('active--cate');
        select1('.view__list.active--viewlist').classList.remove('active--viewlist');
        cate2.classList.add('active--cate');
        cont2.classList.add('active--viewlist');
    }
});

