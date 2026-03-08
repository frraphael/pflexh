export interface ITimeInfo {
    id: string,
    image: string,
    name: string,
    role: string,
    modalText?: {
      full_name: string,
      education: string,
      education_year: number,
      post_education?: string,
      post_education_year?: number
    }
  }