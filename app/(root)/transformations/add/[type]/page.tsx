import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm ';

import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs/server';


import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } =  await auth();
  
  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
     <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
        />
    
     <section className="mt-10">
        <TransformationForm />
       </section>
       </>
   
  )
}

export default AddTransformationTypePage