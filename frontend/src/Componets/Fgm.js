import fgmImg from '../images/2c4c3cfefdfa5d6e7afb3452453bb6bc.webp'
const Fgm = () => {
    return (
        <div>
        <div class="w-full pt-10 pb-10" id='fgm'>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div class="mr-10 bg-gray-200 p-3 w-full md:w-[60%]">
        <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">Female Genital Mutilation-FGM</h2>
        <p class="text-normal md:text-lg pt-3">
        FGM was built on misconceptions and they have been passed from one generation
        to another for many decades.<br/> It’s time to wake up and break this circle otherwise
        our sisters, daughters and granddaughters will continue undergoing this activity
        which is a violation of their human rights. 
        </p>
        </div>
        <div class="mt-7 md:mt-0">
        <img src={fgmImg}/>
        </div>
        </div>
        </div>
        </div>
    );
}
 
export default Fgm;