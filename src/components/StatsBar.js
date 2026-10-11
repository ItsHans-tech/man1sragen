import { schoolData } from "@/data/school";

// TODO: verify these figures with the madrasah's official data before submission.
export default function StatsBar() {
  const stats = [
    {
      value: schoolData.statistics.foundingYear.toString(),
      label: "Tahun Berdiri",
      detail: "19 September 1980",
    },
    {
      value: schoolData.statistics.teachersAndStaff.toString(),
      label: "Pendidik & Tenaga Kependidikan",
      detail: "Guru dan staf operasional",
    },
    {
      value: schoolData.statistics.students,
      label: "Peserta Didik",
      detail: "Terbagi dalam 3 tingkatan kelas",
    },
    {
      value: schoolData.statistics.teacherStudentRatio,
      label: "Rasio Guru dan Siswa",
      detail: "Rasio pembelajaran berimbang",
    },
  ];

      return (
    <div className="mt-12 sm:mt-16 pt-8 border-t border-white/25">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <p className="text-2xl sm:text-2xl font-bold font-serif text-amber-400 drop-shadow">
              {item.value}
            </p>
            <span className="mt-1 text-sm sm:text-base text-white/95">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

