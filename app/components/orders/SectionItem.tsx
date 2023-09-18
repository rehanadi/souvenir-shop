import styles from '@/styles/orders.module.scss'

type SectionItemProps = React.FC<{ title: string, content: string, image?: string }>

const SectionItem: SectionItemProps = ({ title, content, image }) => {
  return (
    <li className='list-group-item'>
      <div className="row">
        <div className="col-4 col-lg-2">
          <span className={styles.subSectionTitle}>{title}</span>
        </div>
        <div className="col-8 col-lg-10">
          {image ? <img src={image} alt={content} title={content} /> : content}
        </div>
      </div>
    </li>
  )
}

export default SectionItem
