// export type Status = 'unsorted' | 'active' | 'inactive' 

export default interface ICard {
    id : number,
    originalName : string,
    givenName : string,
    status : string,
    dateChecked : Date | null
}