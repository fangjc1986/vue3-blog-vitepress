<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { Ball, DoubleResult, OpenedResult, Status, Ticket } from "./double-ball.support";
import DoubleBallCircle from "./double-ball-circle.vue";
import { numberSplit } from "../../../utils/cmm.util";
import { Message } from "@arco-design/web-vue";

// 开奖状态
const status = ref<Status>("wait");
// 最后一次开奖结果
const lastOpenResult = ref<OpenedResult>();
// 红球
const redBalls = ref<Ball[]>(
  Array(33)
    .fill(0)
    .map((_, i) => new Ball("red", i + 1))
);
// 篮球
const blueBalls = ref<Ball[]>(
  Array(16)
    .fill(0)
    .map((_, i) => new Ball("blue", i + 1))
);

/**
 * 点击球事件
 * @param ball
 */
const onClickBall = (ball: Ball) => {
  ball.checked = !ball.checked;
};

// 正在选择的彩票
const selectingTicket = computed<Ticket>(() => {
  const rbs = redBalls.value.filter(b => b.checked);
  const bbs = blueBalls.value.filter(b => b.checked);
  return new Ticket(rbs, bbs);
});

// 已购买的彩票
const purchasedTickets = ref<Ticket[]>([]);

// 已购买的彩票总价
const purchasedTicketsTotalPrice = computed(() => {
  return purchasedTickets.value.reduce((total, ticket) => total + ticket.totalPrice, 0);
});

/**
 * 随机一注
 */
const randomTicket = () => {
  const redPool = redBalls.value.map(b => b.number);
  const balls = [];
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * redPool.length);
    balls.push(redPool[index]);
    redPool.splice(index, 1);
  }
  return new Ticket(
    balls.map(b => new Ball("red", b)),
    [new Ball("blue", Math.floor(Math.random() * 16) + 1)]
  );
};

/**
 * 随机多注
 * @param count 要随机的注数
 */
const randomTickets = (count: number) => {
  const tickets: Ticket[] = [];
  for (let i = 0; i < count; i++) {
    tickets.push(randomTicket());
  }
  return tickets;
};

/**
 * 添加到购物车
 * @param ticket 要添加的彩票
 */
const addTicketToCart = (ticket: Ticket) => {
  purchasedTickets.value.push(selectingTicket.value);
};

/**
 * 添加到购物车
 * @param tickets 要添加的彩票
 */
const addTicketsToCart = (tickets: Ticket[]) => {
  purchasedTickets.value.push(...tickets);
};

/**
 * 从购物车移除
 * @param ticket
 */
const removeTicketFromCart = (ticket: Ticket) => {
  const index = purchasedTickets.value.findIndex(t => t === ticket);
  if (index >= 0) {
    purchasedTickets.value.splice(index, 1);
  }
};

// 开奖次数
const openCount = ref(52 * 3);

// 开奖周期
const openPeriod = computed(() => {
  const y = 52 * 3,
    w = 3;
  const year = Math.floor(openCount.value / y);
  const week = Math.ceil((openCount.value % y) / w);
  let ans = "";
  if (year > 0) ans += ` ${year} 年`;
  if (week > 0) ans += ` ${week} 周`;
  return ans;
});

let openTimer = null;
onBeforeUnmount(() => clearTimeout(openTimer));
/**
 * 开始开奖
 */
const startOpen = () => {
  if (purchasedTickets.value.length < 1) return Message.error("请先添加彩票到购物车");
  if (openCount.value < 1) return Message.error("开奖次数必须大于 0");
  lastOpenResult.value = new OpenedResult();
  const open = (count = 0) => {
    if (count >= purchasedTickets.value.length) {
      status.value = "opened";
      return;
    }
    const result = new DoubleResult();
    result.ticket = randomTicket();
    for (let ticket of purchasedTickets.value) {
      ticket.computeWin(result.ticket);
      result.sort = count;
      result.winCounts[ticket.win] += ticket.qty;
      result.winPrizes[ticket.win] += ticket.winPrize;
      result.winTotalPrize += ticket.winPrize;
    }
    lastOpenResult.value.addResult(result);
    openTimer = setTimeout(open.bind(this, count + 1), 0);
  };
  clearTimeout(openTimer);
  open();
};

// 最后100条开奖记录
const resultLast100 = ref<DoubleResult[]>([]);
const showResultDialog = ref(false);
</script>

<template>
  <div class="flex-column wh100p">
    <!--开奖窗口-->
    <a-modal v-model:visible="showResultDialog" title="开奖结果"></a-modal>
    <!-- 选择号码 -->
    <div class="flex-horiz ball-container">
      <div
        class="flex-horiz box-card pa-md flex-wrap flex-grow"
        style="justify-content: flex-start; align-content: flex-start"
      >
        <double-ball-circle
          class="ma-sm"
          v-for="ball in redBalls"
          :ball="ball"
          @click="onClickBall(ball)"
        >
          {{ ball.number }}
        </double-ball-circle>
      </div>
      <div
        class="flex-horiz flex-wrap flex-not-shk ml-md pa-md box-card"
        style="width: 37%; justify-content: flex-start; align-content: flex-start"
      >
        <double-ball-circle
          class="ma-sm"
          v-for="ball in blueBalls"
          :ball="ball"
          @click="onClickBall(ball)"
        >
          {{ ball.number }}
        </double-ball-circle>
      </div>
    </div>
    <!-- 当前选择的号码 -->
    <div class="box-card pa-md mtb-md">
      <div class="">
        <a-tag v-if="!selectingTicket.isValid" color="red">至少选择 6 个红球 和 1 个蓝球</a-tag>
        <a-space v-else>
          <a-tag color="red" v-if="selectingTicket.isComplex">复式</a-tag>
          <a-tag color="blue" v-else>单注</a-tag>
          <a-tag color="blue">票价：{{ selectingTicket.totalPrice }}元</a-tag>
          <a-tag color="cyan"
            >一等奖概率：{{ (selectingTicket.probability * 100).toFixed(6) }} %</a-tag
          >
        </a-space>
      </div>
      <div class="flex-horiz pa-sm flex-wrap">
        <double-ball-circle
          class="ma-sm"
          v-for="ball in selectingTicket.getBalls()"
          :ball="ball"
          :color-reverse="true"
          @click="onClickBall(ball)"
        ></double-ball-circle>
      </div>
      <div class="text-center" v-if="selectingTicket.isValid">
        <a-button type="primary">
          <template #icon><icon-plus /></template>
          添加到购物车</a-button
        >
      </div>
    </div>
    <!--购物车-->
    <div class="box-card mt-md flex-horiz pa-md" style="height: 250px">
      <div class="flex-column flex-grow overflow-h">
        <div class="flex-not-shk flex-horiz">
          <a-tag color="blue">购物车</a-tag>
          <a-tag class="ml-xs">总金额： {{ numberSplit(purchasedTicketsTotalPrice) }}</a-tag>
          <div class="flex-grow"></div>
          <a-button size="mini" type="primary" @click="purchasedTickets = []">清空</a-button>
        </div>
        <a-divider style="margin-top: 10px; margin-bottom: 0"></a-divider>
        <div class="flex-grow pa-xs" style="overflow: auto">
          <!-- 购物车中的每一注-->
          <div
            class="flex-horiz mb-xs plr-xs pt-xs"
            style="background-color: rgb(var(--purple-1)); border-radius: 4px"
            v-for="item in purchasedTickets"
          >
            <div class="flex-horiz flex-grow flex-wrap">
              <double-ball-circle
                class="mr-xs mb-xs"
                v-for="ball in item.getBalls()"
                :size="20"
                :font-size="10"
                :ball="ball"
              />
            </div>
            <div class="flex-not-shk">
              <icon-delete class="cursor-p" @click="removeTicketFromCart(item)"></icon-delete>
            </div>
          </div>
        </div>
      </div>
      <a-divider direction="vertical"></a-divider>
      <a-space direction="vertical" class="flex-not-shk ml-md" style="width: 140px">
        <a-button long type="primary" @click="addTicketsToCart(randomTickets(1))">
          <template #icon><icon-plus /></template>
          随机 1 注
        </a-button>
        <a-button long type="primary" @click="addTicketsToCart(randomTickets(10))">
          <template #icon><icon-plus /></template>
          随机 10 注
        </a-button>
        <a-button long type="primary" @click="addTicketsToCart(randomTickets(100))">
          <template #icon><icon-plus /></template>
          随机 100 注
        </a-button>
        <a-button long type="primary" status="success" @click="startOpen">
          <template #icon><icon-poweroff /></template>
          开奖
        </a-button>
        <a-input-number v-model="openCount">
          <template #prefix>开</template>
          <template #suffix>期&nbsp;&nbsp;&nbsp;&nbsp;</template>
        </a-input-number>
        <div class="text-center">
          <a-tag class="">约{{ openPeriod }}</a-tag>
        </div>
      </a-space>
    </div>
    <a-modal></a-modal>
  </div>
</template>

<style scoped lang="less">
.ball-container {
}
</style>
