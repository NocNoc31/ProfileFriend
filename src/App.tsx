import { Profile } from "./One/Profile";
import { Search } from "./Two/Search";
function App() {
  return (
    // <div className="w-full h-screen bg-[#7562c9] flex justify-center items-start overflow-auto">
    //   <div className="flex flex-col space-y-4 p-4 max-h-full overflow-y-auto">
    //     <Profile name="LÊ ĐỨC GIANG" description="TRẺ TRÂU SỐ 1 VIỆT NAM." img="./giang.jpg" />
    //     <Profile name="LÊ HÀ PHƯƠNG" description="TRẺ TRÂU SỐ 2 VIỆT NAM" img="./phuong.jpg" />
    //     <Profile name="VÍ DỤ " description="THE THIRD FRIEND WAS ADD" img="./cde.jpg" />
    //     {/* Thêm các Profile khác ở đây */}
    //   </div>
    // </div>
  

    <div className="w-full h-screen bg-[#7562c9] flex justify-center items-start overflow-auto">
    <div className="flex flex-col space-y-4 p-4 max-h-full overflow-y-auto">
      <Profile 
        name="Chó" 
        description={
        <>
          Tên cúng cơm: mèo. <br />
          Dòng chó: Corgi. <br />
          Ưu điểm: Vui nhộn, dễ thương bên bạn những lúc buồn vui xui nói chung là tuyệt vời. <br />
          Nhược điểm: Hay ăn lười thể dục nên hơi béo nhưng đó là điểm mạnh (ps: Biến nhược điểm thành ưu điểm).

        </>
        }
        img="./corgi.gif" 
      />

      <Profile 
        name="Mèo" 
        description={
        <>
          Tên cúng cơm: chó. <br />
          Ưu điểm: Nếu cần một giấc ngủ không ai làm phiền, giảm cân đốt năng lượng do (chăm sóc cho quàng thượng), đài phát thanh meomeo.  <br />
          Hãy gọi cho meo. <br />
          Nhược điểm: Quàng thượng không bao giờ có nhược điểm 10 điểm không có nhưng.

        </>
        }
        img="./cat.jpg" 
      />

      <Profile 
        name="Ánh mặt trời" 
        description={
        <>
          Là nguồn sáng cho mọi sinh vật và bông hoa cũng không ngoại lệ. <br />
          Mang đến nguồn sống, lý tưởng sống cho bông hoa. Là lý do để hoa hướng đến dõi theo. <br />
          Vì mặt trời chỉ có một nên độc lập là tính cách, mạnh mẽ là bản năng. <br />
          Cố gắng mạnh mẽ để tỏa sáng mặc dù ngoài trời tối đen hay âm u không một ngọn nắng. <br /> 
          Nhưng nắng quên rằng hoa là lý do để nó tỏa sáng thắp sáng cả vùng trời.
        </>
        }
        img="./sun.jpg" 
      />

<Profile 
        name="Hoa hướng dương" 
        description={
        <>
          Như tên gọi dù đang ở đâu cũng hướng về mặt trời (hướng dương) <br />
          Nhiều lúc quên mất mặt trời để mặt trời buồn, cố gắng chịu đựng những ngày mưa ngâu không được tỏa nắng <br />
          Dù mặt trời có giận dỗi quay tròn từ Đông sang Tây đến chân trời thì hoa vẫn hướng về dương vẫn dõi theo.<br />
          Hoa biết mặt trời không chỉ tỏa nắng cho hoa mà còn nhiều thứ bận tâm vì những buổi đầy nắng đẹp, những tia nắng xuyên qua kẽ lá. <br />
          Phải có nắng thì mới có khung cảnh đẹp như này chứ (Có thể đây là vì mục đích chung,khung cảnh chung và là lựa chọn tốt nhất maybe. ) <br />
          Thật vui vì hoa đã từng là một mục đích để nắng tỏa sáng :)) <br />

        </>
        }
        img="./hoa.jpg" 
      />
      {/* Thêm các Profile khác ở đây */}
    </div>
  </div>
  
    
  );
}

export default App;
