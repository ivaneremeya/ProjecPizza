



function Categories ({values, clickCategories}) {
  const onClickCategories = (even) => {
    clickCategories(even)
  }

  const Categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {Categories.map((value, index) =>
          <li key={index} onClick={()=> onClickCategories(index)} className={values === index ? "active" : ''}>{value}</li>)
        }
      </ul>
    </div>
  )
}

export default Categories;


