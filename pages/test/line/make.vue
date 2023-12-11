<template>
  <div class="pt-4 px-4 pb-2">
    <div class="input-title font-bold">
      👉 친구들에게 공유할 테스트를 만드세요.
    </div>

    <div class="my-2">
      <div class="test-subtitle mb-1">닉네임</div>
      <a-input
        v-model:value="nickname"
        size="large"
        placeholder="이름 혹은 별명을 적어주세요"
      />
    </div>

    <div class="my-2">
      <div class="test-subtitle mb-1">테스트 제목</div>
      <a-input v-model:value="title" size="large" placeholder="테스트 제목" />
    </div>
    <div class="my-2">
      <div class="test-subtitle mb-1">테스트 설명</div>
      <a-input
        v-model:value="description"
        size="large"
        placeholder="설명은 간략하게 입력해주세요(선택)"
      />
    </div>
    <div class="my-2">
      <div class="test-subtitle mb-1">
        테스트 결과
        <a-popover
          title="괄호로 감싸진 [닉네임]과 [단어]들이 치환되어서 문장을 만듭니다. [단어]는 아래에 적은 단어들이 랜덤으로 적용이 됩니다."
          trigger="click"
        >
          <a-button size="small" shape="circle" class="ml-1"> ? </a-button>
        </a-popover>
      </div>
      <a-textarea rows="2" />
      <a-button-group class="text-center mt-2 w-full">
        <a-button class="btn-radio-word"> 닉네임 </a-button>
        <a-button class="btn-radio-word"> 단어1 </a-button>
        <a-button class="btn-radio-word"> 단어2 </a-button>
        <a-button class="btn-radio-word"> 단어3 </a-button>
        <a-button class="btn-radio-word"> 단어4 </a-button>
        <a-button class="btn-radio-word"> 단어5 </a-button>
      </a-button-group>
    </div>

    <!-- <div class="my-2">
          {wordArr.map((item) => (
            <div class="mb-2" key={item}>
              <div class="test-subtitle mb-1 ">
                단어{item} -{" "}
                <span class="text-gray-400 font-normal text-sm">
                  줄바꿈으로 여러개를 등록할 수 있습니다.
                </span>
              </div>
              <TextArea
                rows={3}
                value={
                  word[`word${item}`] ? word[`word${item}`].join("\n") : ""
                }
                onChange={(e) => setChangeWord(e, item)}
              />
            </div>
          ))}

          <div class="mt-2">
            <Button
              type="default"
              class="mr-2"
              onClick={() => removeSetWord()}
            >
              단어 삭제
            </Button>
            <Button type="default" onClick={() => addSetWord()}>
              단어 추가
            </Button>
          </div>
          <div class="mt-2">
            <div class="test-subtitle mb-1">미리보기 👀 - {preview}</div>
            <ButtonGroup class="w-full text-center">
              <Button
                type="default"
                class="radio-button"
                onClick={() => doPreview()}
              >
                미리보기
              </Button>
              <Button
                type="primary"
                class="btn-add radio-button"
                onClick={() => doAdd()}
              >
                등록
              </Button>
            </ButtonGroup>
          </div>
        </div> -->
  </div>
</template>

<script setup>
const nickname = ref("");
const title = ref("");
const description = ref("");
const open = ref(false);
</script>
