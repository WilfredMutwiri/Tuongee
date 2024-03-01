import menstrualImg from '../images/3adcc996559c5784db050faf33c8fc93.webp'
const Menstrual = () => {
    return (
        <div>
        <div  class="w-full pt-10 bg-white pb-10" id='menstrual'>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div>
        <img src={menstrualImg} alt='mentrualImg'/>
        </div>
        <div  class="pt-10 md: pt-0ml-0 md:ml-10 bg-gray-300 p-3 w-full">
        <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">Menstrual Enlightment</h2>
          <p class="text-normal md:text-lg pt-3">
          In most cases gender inequality, cultural taboo and poverty are the major obstacles
          towards meeting the menstrual health. In most of the sub-sahara countries and low
          economic countries cultural taboos are very common.<br/> This makes it hard for parents
          and guardian to share information on menstrual hygiene to their kids. This leaves
          them with inadequate information to prepare for the changes that will occur in their
          bodies. Let us not be ashamed of sharing sexual reproductive related information to
          our children 
          </p>
          </div>
        </div>
        </div>
        </div>
    );
}
 
export default Menstrual;