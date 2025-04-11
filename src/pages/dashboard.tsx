
import { useEffect, useState } from 'react';
import { Button } from '../components/button';
import { PlusIcon } from '../components/icons/Plusicon';
import { ShareIcon } from '../components/icons/shareIcon';
import { Card } from '../components/card';
import { CreateContentModal } from '../components/CreateContent';
import { Sidebar } from '../components/sideBarContent';
import { useContent } from '../hooks/useContent';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const {contents, fetchContents}=useContent()
  useEffect(()=>{
    fetchContents()
  }, [modalOpen])
  return (
    <div>
      <Sidebar/>
      <div className='p-4 ml-72 min-h-screen bg-gray-100 '>
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className='flex justify-end gap-4'>
      <Button  onClick={()=>{
        setModalOpen(true)
      }}
      size="md" 
      title='Add Content'
      startIcon={<PlusIcon size={'md'}/>}
      variant='primary'>
      </Button>
      <Button startIcon={<ShareIcon size={'md'}/>} 
      size="md" 
      title='Share Brain'
      variant='secondary'>
      </Button>
      </div>

      <div className= 'flex gap-4 flex-wrap'>
        {contents.map(({type, link, title})=>  <Card 
        title={title} 
        link={link} 
        type={type}/>
)}


      </div>
      
 
      
      </div>

    </div>
  )
}

export default Dashboard
